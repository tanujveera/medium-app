# Medium Clone App

## Tech Stack
- React.JS (frontend)
- Express.JS (backend)
- Docker

## Start the application

- Clone the repository
- In terminal, go to `/medium-app` directory and use below command

```sh
docker-compose up --build
```
---

## Docker Memory Hungry

I have encountered this issue where the Docker process is running in background even after the docker is closed.

Docker uses Windows Subsystem for Linux which is a feature of Microsoft Windows that allows developers to run a Linux environment without the need for a separate virtual machine or dual booting. 

Go to Powershell

```sh
wsl --shutdown
```

To reduce the RAM usage by WSL by giving a `.wslconfig` config file.

Go to `C:/Users/<user_id>/` and create a file `.wslconfig`

```js
// .wslconfig
[wsl2]
memory=2GB
processors=1
```

You can check your processor cores in Task Manager > Performance > CPU > Here check for Cores field.

After this config file is created. You can start docker and it only consumes the resources within the limit.

---