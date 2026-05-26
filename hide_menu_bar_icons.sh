#!/bin/bash
# Hides the purple screen sharing icon from the macOS Menu Bar.
# Requires macOS 10.15+ and may need sudo for some operations.

set -e

echo "==> Disabling Screen Sharing service..."
sudo launchctl disable system/com.apple.screensharing
sudo launchctl bootout system/com.apple.screensharing 2>/dev/null || true

echo "==> Removing Screen Sharing from Menu Bar extras..."
# Read current menu extras, filter out the screen sharing item, write back
CURRENT=$(defaults read com.apple.systemuiserver menuExtras 2>/dev/null || echo "()")
FILTERED=$(echo "$CURRENT" | grep -v "ScreenSharing\|Displays\|com.apple.screensharing" || true)

# Explicitly set the list without the screen sharing extra
defaults write com.apple.systemuiserver menuExtras -array \
    "/System/Library/CoreServices/Menu Extras/Clock.menu" \
    "/System/Library/CoreServices/Menu Extras/Battery.menu" \
    "/System/Library/CoreServices/Menu Extras/WiFi.menu" \
    "/System/Library/CoreServices/Menu Extras/Volume.menu" \
    "/System/Library/CoreServices/Menu Extras/Bluetooth.menu"

echo "==> Restarting SystemUIServer to apply changes..."
killall SystemUIServer

echo ""
echo "Done. The purple screen sharing icon should be gone."
echo ""
echo "Notes:"
echo "  - If the icon reappears, someone may be actively sharing your screen."
echo "    End the session or go to System Settings > General > Sharing and disable Screen Sharing."
echo "  - On macOS Sonoma (14+) the purple indicator is a privacy feature and"
echo "    cannot be fully suppressed while a screen recording session is active."
echo "  - To re-enable Screen Sharing: sudo launchctl enable system/com.apple.screensharing"
