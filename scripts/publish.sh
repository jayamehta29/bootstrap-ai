#!/bin/bash

# Bootstrap AI Publishing Script
# This script helps publish the Bootstrap AI package to npm

set -e

echo "🚀 Bootstrap AI Publishing Script"
echo "================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the bootstrap-ai root directory"
    exit 1
fi

# Check if npm is logged in
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ Error: Please login to npm first with 'npm login'"
    exit 1
fi

echo "✅ npm login verified"

# Build the packages
echo "📦 Building packages..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully"

# Ask for version type
echo ""
echo "📝 What type of release is this?"
echo "1) patch (bug fixes)"
echo "2) minor (new features)"
echo "3) major (breaking changes)"
echo "4) custom version"
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        VERSION_TYPE="patch"
        ;;
    2)
        VERSION_TYPE="minor"
        ;;
    3)
        VERSION_TYPE="major"
        ;;
    4)
        read -p "Enter custom version (e.g., 1.2.3): " CUSTOM_VERSION
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

# Update version
echo ""
echo "📝 Updating version..."
cd packages/ui

if [ "$choice" = "4" ]; then
    npm version $CUSTOM_VERSION
else
    npm version $VERSION_TYPE
fi

NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ Version updated to $NEW_VERSION"

# Publish the package
echo ""
echo "📤 Publishing package..."
npm publish

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Successfully published @bootstrap-ai/ui@$NEW_VERSION"
    echo ""
    echo "📋 Next steps:"
    echo "1. Test the published package: npm install @bootstrap-ai/ui@$NEW_VERSION"
    echo "2. Update documentation if needed"
    echo "3. Create a GitHub release"
    echo ""
    echo "🔗 Package URL: https://www.npmjs.com/package/@bootstrap-ai/ui"
else
    echo "❌ Publishing failed. Please check the errors above."
    exit 1
fi
