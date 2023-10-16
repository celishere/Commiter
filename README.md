<p align="center">
	<img width="600" height="300" src="media/title.png" alt="title">
</p>

# GitHub Stats Bot
Telegram bot that sends new commits from GitHub with statistics to the chat

<div align="center">
    <details>
        <summary>Alert example</summary>
        <br/>
	    <img width="328" height="246" src="media/introduction.png" alt="introduction">
    </details>
</div>

# Installation
1. Node is required.
2. Make sure everything is correct in ```.env``` file.
3. Run ```npm install``` to install dependencies
4. Run ```npm run start```


# Setting up the GitHub Webhook
<details>
<summary>1. For repository:</summary>
<div style="margin-left: 20px">
    <p style="font-size: 20px">
        Go to repository settings and select webhooks:
    </p>
</div>

<div style="margin-left: 20px">
   <details>
            <summary>Example url</summary>
            <br/>
            <a>https://github.com/YOUR_USERNAME/YOUR_REPO/settings/hooks</a>
    </details>
</div>

<p align="center">
    <img width="270" height="340" src="media/webhook_2.png" alt="title">
</p>

<div style="margin-left: 20px">
    <p style="font-size: 20px">
        - Create webhook with your URL.
        <br/>
        - Set content type to <span style="font-style: italic; font-weight: bold">application/json</span>
        <br/>
        <p style="font-size: 18px">You can choose which events you will receive, we only need the "Pushes" event</p> 
         <details>
            <summary>Show webhook settings</summary>
            <p align="center">
                <img width="900" height="550" src="media/webhook_3.png" alt="title">
            </p>
        </details>
</p>
</div>
</details>
<br/>
<details>
<summary>2. For organisation:</summary>
<div style="margin-left: 20px">
    <p style="font-size: 20px">
        Go to organisation settings and select webhooks:
    </p>
</div>

<div style="margin-left: 20px">
   <details>
            <summary>Example url</summary>
            <br/>
            <a>https://github.com/YOUR_ORGANISATION/settings/hooks</a>
    </details>
</div>

<p align="center">
    <img width="260" height="330" src="media/webhook_1.png" alt="title">
</p>

<div style="margin-left: 20px">
    <p style="font-size: 20px">
        - Create webhook with your URL.
        <br/>
        - Set content type to <span style="font-style: italic; font-weight: bold">application/json</span>
        <br/>
        <p style="font-size: 18px">You can choose which events you will receive, we only need the "Pushes" event</p>  
        <details>
            <summary>Show webhook settings</summary>
            <p align="center">
                <img width="900" height="550" src="media/webhook_3.png" alt="title">
            </p>
        </details>
    </p>
</div>
</details>

# Getting GitHub Key

1. Go to account settings, go down and select ``Developer Settings``
<img width="387" height="187" src="media/api_1.png" alt="title">

2. Go to ``Fine-grained tokens`` section
3. Click on ``Generate new token`` button
4. Create a new token.

### IMPORTANT!
   If you want to create a token for an organization, then you need to enable this feature in the organization settings.

<details>
        <summary>Show details</summary>
        <a>https://github.com/organizations/YOUR_ORGANISATION/settings/personal-access-tokens</a>
        <br/>
        <br/>
        <img width="1000" height="300" src="media/api_3.png" alt="title">
        <p>Then, select in 'Resource Owner' your organisation</p>
</details>

# Docker

### Build and deploy with Docker

```
# build image
docker build . -t webhook

# check image
docker images webhook:latest

# run container
docker run webhook
```

### Build and deploy with docker-compose

```
# build and start service
docker-compose up --build

# stop service and remove artifacts
docker-compose down
```
