#!/usr/bin/bash

# Enable debugging mode
# set -x

# This option will cause Bash to exit immediately with an error when any command in the script fails
# set -e

# Check the exit code
# if [ $? -ne 0 ]; then
#     echo "Error occurred."
# fi

# Function to delete files based on history id
delete_files() {
    history_id=$1
    files=($(grep -rl "$history_id" allure-results))

    if [ ${#files[@]} -eq 0 ]; then
        echo "No files found with history id: $history_id"
        return
    fi

    echo "Files to be deleted:"
    for ((i=1; i<=${#files[@]}; i++)); do
        echo "$i: ${files[$i-1]}"
    done

    echo "History id: $history_id"

    read -p "Do you want to delete these ${#files[@]} files? (y/n): " confirm
    if [ "$confirm" == "y" ]; then
        rm -f "${files[@]}"
        echo "${#files[@]} Files deleted successfully."
    else
        echo "Deletion canceled."
    fi
}

# Main script
read -p "Enter the test-case json file name (without extension): " test_case_name

test_case_file="allure-report/data/test-cases/$test_case_name.json"

if [ ! -f "$test_case_file" ]; then
    echo "Test-case file not found: $test_case_file"
    exit 1
fi

history_id=$(node -e "const content = require('fs').readFileSync('./$test_case_file', 'utf8'); console.log(JSON.parse(content).historyId)")


if [ "$history_id" == "null" ]; then
    echo "History id not found in $test_case_file"
    exit 1
fi

delete_files "$history_id"