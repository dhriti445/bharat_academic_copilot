@echo off
REM Bharat Academic Copilot - Quick Server Startup Script
REM Opens the app in your default browser with Python HTTP Server

echo.
echo ====================================
echo Bharat Academic Copilot
echo Exam Intelligence System
echo ====================================
echo.
echo Starting local server...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

REM Navigate to project directory
cd /d "%~dp0"

REM Start Python HTTP server
echo Server will start on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
echo Opening your browser...
timeout /t 2 >nul
start http://localhost:8000

REM Run the server
python -m http.server 8000
