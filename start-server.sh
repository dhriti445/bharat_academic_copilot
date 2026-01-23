#!/bin/bash
# Bharat Academic Copilot - Quick Server Startup Script
# For macOS and Linux users

echo ""
echo "===================================="
echo "Bharat Academic Copilot"
echo "Exam Intelligence System"
echo "===================================="
echo ""

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed"
    echo "Please install Python 3 from https://www.python.org/downloads/"
    exit 1
fi

# Navigate to script directory
cd "$(dirname "$0")"

echo "Server will start on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""
echo "Opening your browser..."

# Open in default browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:8000
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open http://localhost:8000
fi

# Start Python HTTP server
python3 -m http.server 8000
