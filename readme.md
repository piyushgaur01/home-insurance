# Home Insurance Project

This repo contains source code of SimpliLearn's Home Insurance Project required to be completed for Java Certification.

# Getting started

Easiest way to start this project is by cloning the repository and running it in docker.

```bash
# Make sure docker is running
docker info

# Clone the repository
git clone git@github.com:piyushgaur01/home-insurance.git
cd home-insurance

# create data directory under mysql
mkdir mysql/data

# start the services using docker-compose
docker-compose up -d

# Verify services running (3 services)
docker ps

# CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                               NAMES
# 72ce8e7e103f        home-insurance_frontend   "nginx -g 'daemon of…"   10 minutes ago      Up 3 seconds        0.0.0.0:4200->80/tcp                home-insurance_frontend_1
# b878be4c94c1        home-insurance_backend    "java -cp app:app/li…"   10 minutes ago      Up 4 seconds        0.0.0.0:9090->9090/tcp              home-insurance_backend_1
# a60eb089e5f9        mysql                     "docker-entrypoint.s…"   10 minutes ago      Up 5 seconds        0.0.0.0:3306->3306/tcp, 33060/tcp   home-insurance_mysql-db_1
```

# Running Project

Once all the services have been started. Open [http://localhost:4200](http://localhost:4200) and you should be able to see a UI. 

Admin Credentials: `admin/admin`

Create normal (non-admin) users by clicking on `Create New Account` button

![UI](https://i.imgur.com/wGOIvkZ.png)
