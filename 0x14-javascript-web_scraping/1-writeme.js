#!/bin/bash

file_path="$1"
string="$2"

echo "$string" > "$file_path" 2> error.log || cat error.log >&2

