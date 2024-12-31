#!/bin/bash

START_DATE="2025-01-01"
END_DATE="2025-05-10"

current=$(date -d "$START_DATE" +%s)
end=$(date -d "$END_DATE" +%s)

messages=(
  "setup project"
  "add auth module"
  "fix api validation"
  "refactor services"
  "add docker support"
  "update dependencies"
  "implement jwt auth"
  "improve error handling"
  "optimize queries"
  "add swagger docs"
)

while [ $current -le $end ]
do
    commits=$((1 + RANDOM % 4))

    for ((i=0; i<$commits; i++))
    do
        echo "$RANDOM" >> activity.txt

        git add .

        random_index=$((RANDOM % ${#messages[@]}))
        msg=${messages[$random_index]}

        GIT_AUTHOR_DATE="$(date -d @$current)" \
        GIT_COMMITTER_DATE="$(date -d @$current)" \
        git commit -m "$msg"

    done

    current=$((current + 86400))
done
