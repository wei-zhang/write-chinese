.PHONY: sync serve

# Sync web source into the iOS Xcode bundle
sync:
	rsync -av --delete web/ ios/WriteChinese/web/

# Run local dev server for the web app
serve:
	cd web && python3 -m http.server 8080
