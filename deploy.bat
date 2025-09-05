@echo off
echo Building the project...
npm run build

echo.
echo Build completed! 
echo.
echo To deploy to reel.hamikano.com:
echo 1. Upload the contents of the 'dist' folder to your subdomain directory
echo 2. Make sure .htaccess file is included
echo 3. Ensure all assets are properly uploaded
echo.
echo Files to upload are in the 'dist' directory
pause