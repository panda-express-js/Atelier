# FEC
Git WorkFlow
1. Branch Creation or Switching:
    * Avoid coding directly in the main branch. Create or switch to a specific feature branch:
      + Create a feature branch:
        git checkout -b <feature-branch>
      + Or switch to an existing branch:
        git checkout <feature-branch>

2. Merge updates from the main branch into your working branch and resolve any conflicts:
      git pull origin main

3. Coding and Committing:
    * keep code less than 30 lines for review
    * After coding, add, commit, and push your changes:
        git add <file-name> or git add . to add all files
        git commit
        git push origin <feature-branch>

4. In Github, make pull request (PR) from feature branch to main
      > Link the pull request to the related task card in Trello, and remove the task card to review stage

5. Resolve any merge conflicts if indicated in github by repeat step 1-3

6. Require at least one team member to review and approve the PR.

7. Once the PR is approved, the reviewer click the merge green button to complete the merge