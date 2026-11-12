#!/bin/sh
# cap sync rewrites this to node_modules; keep the vendored SPM path so Xcode
# works from a clone without npm install.
file=ios/App/CapApp-SPM/Package.swift
if [ -f "$file" ]; then
  sed -i 's|path: "../../../node_modules/@capacitor/haptics"|path: "../../vendor/CapacitorHaptics"|' "$file"
fi
