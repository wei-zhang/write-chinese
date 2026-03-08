import SwiftUI
import WebKit

struct ContentView: View {
    var body: some View {
        WebView()
            .ignoresSafeArea()
            .background(Color(red: 0.1, green: 0.1, blue: 0.16))
    }
}

// MARK: - WKWebView wrapper

struct WebView: UIViewRepresentable {

    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        // Allow localStorage (required for progress saving)
        let prefs = WKWebpagePreferences()
        prefs.allowsContentJavaScript = true
        config.defaultWebpagePreferences = prefs

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = context.coordinator
        webView.uiDelegate = context.coordinator

        // Prevent native scroll — the web app manages its own layout
        webView.scrollView.isScrollEnabled = false
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.automaticallyAdjustsScrollIndicatorInsets = false

        webView.isOpaque = true
        webView.backgroundColor = UIColor(red: 0.1, green: 0.1, blue: 0.16, alpha: 1)

        // Disable long-press callouts and selection
        let noSelect = "document.documentElement.style.webkitUserSelect='none';" +
                       "document.documentElement.style.webkitTouchCallout='none';"
        let userScript = WKUserScript(source: noSelect,
                                      injectionTime: .atDocumentEnd,
                                      forMainFrameOnly: true)
        config.userContentController.addUserScript(userScript)

        loadPage(in: webView)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {}

    // MARK: - File loading

    private func loadPage(in webView: WKWebView) {
        guard
            let webDir  = Bundle.main.url(forResource: "web", withExtension: nil),
            let indexURL = Bundle.main.url(forResource: "index",
                                           withExtension: "html",
                                           subdirectory: "web")
        else {
            // Fallback: show an error page
            webView.loadHTMLString(
                "<body style='background:#111;color:#fff;font-family:sans-serif;padding:40px'>" +
                "<h2>⚠️ Could not load app</h2>" +
                "<p>The web resources are missing from the app bundle.</p>" +
                "</body>", baseURL: nil)
            return
        }
        // allowingReadAccessTo: webDir grants fetch() access to all files in web/
        webView.loadFileURL(indexURL, allowingReadAccessTo: webDir)
    }

    // MARK: - Coordinator

    class Coordinator: NSObject, WKNavigationDelegate, WKUIDelegate {

        // Block external navigation (keep all links inside the app)
        func webView(_ webView: WKWebView,
                     decidePolicyFor action: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            if action.navigationType == .linkActivated,
               let url = action.request.url,
               url.scheme != "file" {
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        }

        // Suppress JavaScript alerts (optional — uncomment to show them)
        // func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage ...) { ... }
    }
}

#Preview {
    ContentView()
}
