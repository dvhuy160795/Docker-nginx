# #!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SCRIPT=$(readlink -f $0)
SOURCEPATH=`dirname $SCRIPT`

composer create-project --prefer-dist laravel/laravel $SOURCEPATH/../../source


chmod -R 777 $SOURCEPATH/../../source/storage/
(cd $SOURCEPATH/../../source && exec composer install)
(cd $SOURCEPATH/../../source && exec chmod -R 777 storage/)

#run docker-compose
docker rm -f huydv-mysql server-nginx huydv-php
docker-compose -f $SOURCEPATH/../docker-compose.yml up
