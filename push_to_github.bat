@echo off
echo Setting up Git configuration...
git config user.name "yuww5120"
git config user.email "your-email@example.com"

echo Committing changes...
git commit -m "Initial commit"

echo Adding remote repository...
git remote add origin https://github.com/yuww5120/timer.git

echo Pushing to GitHub...
git push -u origin master

echo Done!
pause 