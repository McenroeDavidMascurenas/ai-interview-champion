@echo off
rem Starts the study app on http://localhost:5173 and opens it in the browser.
cd /d "%~dp0"
start "" http://localhost:5173
where py >nul 2>nul && (py -m http.server 5173 & goto :eof)
where python >nul 2>nul && (python -m http.server 5173 & goto :eof)
where npx >nul 2>nul && (npx --yes http-server -p 5173 -c-1 & goto :eof)
echo Could not find Python or Node.js. Install Python from https://www.python.org/downloads/
pause
