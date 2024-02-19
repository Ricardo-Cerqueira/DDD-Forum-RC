## US 027 - Highlights more than 1/3 and less than 2/3 with yellow
 
## 1. Tests
 
## Test 1: At least one post should be comment
 
**Preconditions:**
 
1. A member must be logged into DDD forum.
2. A post should exists and have at least one comment.

 
**Test Steps:**
 
1. Sort the post by Unpopular
2. Get the most commented post.
3. Get the posts with more than 1/3 and less than 2/3 of the highest of the most comment  post.
 
**Expect Results:**
 
1. The background of the posts that meet the criteria should be highlighted with yellow.
 
## Test 2: Popular post without comments
 
**Preconditions:**
 
1. A member must be logged into DDD forum.
2. A post should exists but without comments.
 
**Test Steps:**
 
1. Sort the post by Unpopular.
2. Verify if there is any post with comment.
 
 
**Expect Results:**
 
1. The background of the posts should remain without a color.
 
**Test 3 : A visitor not logged**
 
**Preconditions:**
 
1. Member isn't logged.
2. A post should exists and have one or more comments.
 
**Test Steps:**
 
1. Sort the post by Unopular.
 
**Expected Result:**
 
1. The background of the posts should remain without a color.