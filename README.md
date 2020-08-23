# SchedulingWriters

The algorithm:
* 1. Get the count of the tales submitted by each writer. 
* 2. Sort this count in decreasing order of frequency. 
* 3. Since we have to post 10 posts per day, we can divide the authors into groups such that authors that belong to the same group compete for a single post on a given day.
* 4. Since we require 10 groups for the 10 posts, we need the total number of posts that can be included in a particular group. 
* 5. The number of posts in a group will be the totalPosts/ postsInOneDay = ~60. 
* 6. Now that we have 10 groups, for each group we will decide which author will get that post. For this, we will choose an author in Round Robin manner.

The psudeo code is present in psuedocode.txt. 

* In this case, we have a total of 562 posts and 75 different writers. 

![Image](https://dl.dropbox.com/s/yf3khgma5xp4jpq/ttt-writer.JPG?dl=0)

* According to the algorithm, there will be 10 groups and each group will consist of authors such that the total posts written by those authors are ~60. 
* Our first group will consist of the writer(ID: 999924001444) who has written 72 tales. 
* The 2nd group will consist of writers(ID: 999524056644 and 1042342986304) who have written 29 and 28 tales respectively which sum up to 58 tales. 

![Image](https://dl.dropbox.com/s/fdvmt92yjsp1s55/ttt-writer1.JPG?dl=0)

* Similary, the last group will consist of writers who have each written upto 3 tales (ID: 1044447208324 to 1042281730084) since they all sum upto 62 tales. This group consists of 34 writers. 

Now everyday, 
* The 1st post will be of the writer who has written 72 posts since he is the only member of his group. 
* The 2nd post will be of one of the writers of the 2nd group. This will be selected alternately. 
* And the 10th post will be of one the 34 writers from that group. 

Why was this method selected: 
* It is advisable for authors who have written similar number of posts to compete with each other. 
* If the writers were just selected in proportion to the number of posts they have written, the writer who has written just 1 tale would stand a very slow chance as compared to the writer with 72 tales. 

Happiness Index for a writer is a function of: 
* The number of his tales that were published
* How frequently the posts were published. 

* In this case, writers who have written many tales will get a chance to be selected freqeuntly and hence their happiness index will be high. (30/72 tales will be posted for the * 1st writter, so 50% tales on a everyday basis). 
* The writers who have written less tales will be happy because majority of their tales will get published but the frequency will be low in this case. 
* Since we have tried to ensure that a writer has atleast 1 published post, the unhappy index should be low. 



