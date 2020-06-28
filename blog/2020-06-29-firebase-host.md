---
id: firebase_Hosting
title: Hosting Web application into Firebase from VS Code and Github Action
author: Abhin Pai
author_title: Abhin Pai
author_url: https://github.com/abhinpai
author_image_url: https://avatars1.githubusercontent.com/u/15942876?v=4
tags: [Firebase, vscode, Github-Action]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Recently I have developed a new react application but I was wondering how to host my application by that anybody can access it remotely.

Then I found a very simplest way to host an application using firebase hosting. The same I want to convey every bright developer out there 😊

<!--truncate-->

# Here is the step by step instruction

## Create a Firebase Application

Goto **Firebase** then login with you Gmail account after login it will take you to the firebase homepage then click on **Go to console** refer below image

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*VixKhxqMUl8u-P1f6wKAMQ.png')}  alt='firebase header' />
</p>

After you will land on a Firebase project page where you can see your existing project or can create a new project, now let’s go and create a new project. Click on **Add Project**

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*yDpNdh8MX0rr_YomkPXsGA.png')}  alt='firebase' />
</p>

Enter your **project name** -> Click continue -> It will ask for the analytics click continue -> Will ask you to select the account select your account and click create a project, hurry you successfully created your firebase project 🎉

Now you are done with the common step to host from the local machine and Github Action

## Hosting Application from VS Code

1. Install Firebase CLI tools in your local machine by the following command

```
npm install -g firebase-tools
```

2. Now let’s link your local app to the Firebase project by running following CMDs. Sign in and test the Firebase CLI
   firebase login

```
firebase projects:list
```

3. Initialize the Firebase into the project

```
firebase init
```

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*ilTlEpAzFpf_2fU_HOHvmg.png')}  alt='firebase' />
</p>

4. Then in your terminal or cmd prompt, Firebase CLI will give multiple options like Realtime Database, Firestore, Analytics, Hosting, etc. In that **select Hosting**

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*J4FvNfpeuDIh0PHVF7scHw.png')}  alt='firebase' />
</p>

5. After selecting Hosting you can see these options, in that select **Use an existing project**

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1328/1*CIs7-cFm27_A-XmAkkS-Jw.png')}  alt='firebase' />
</p>

6. Once you select the above option you can see all the projects present in your firebase account in that select the project in which you want to host

7. After selection, you will be asked the following questions

   - What do you want to use as your public directory? **build**
   - Configure as a single-page app (rewrite all URLs to /index.html)?
     **_No If index.html it’s already present then you be will ask for do you want to overwrite file then say ‘no’_**

8. Here is your major task is done and you’re just one step behind to go live

9. Execute the final deploy command

```js
firebase deploy
```

Aye Aye Captain you’re application is live now, Kudos 🎊

Automating the application hosting using Github Action

1. Push all your code to GitHub

2. Go to your repository in GitHub and click on **Action** and then click on **Set up a workflow yourself**

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*cam0Vs7DyFUouCj3_rzHSA.png')}  alt='firebase' />
</p>

3. Copy the code from this [repo](https://github.com/abhinpai/React-GraphQL-API-Explorer/blob/master/.github/workflows/main.yml) and copy it in your code pane

4. Execute below cmd to get the Firebase Token, it will ask for login and on successful login, you will receive the token in a terminal or in cmd prompt. Copy that token

```
firebase login:ci
```

5. Now you’re almost there, go back to GitHub click on setting > click on the secret tab to add Firebase Token

<p align='center'>
<img src={useBaseUrl('https://miro.medium.com/max/1400/1*LBTPHdTFvIkZZUAsO0YoXA.png')}  alt='firebase' />
</p>

Bingo you are all done now your deployment process is automated 😍
OMG, this is the end of the Story hope you guys find it’s useful.
For reference follow my project in GitHub

For a reference you can follow this 👉 [repo](https://github.com/abhinpai/React-GraphQL-API-Explorer)
