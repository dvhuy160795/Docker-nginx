# #!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo dirname "${BASH_SOURCE[0]}" 
SCRIPT=$(readlink --f $0)
SOURCEPATH=`dirname $SCRIPT`

chmod -R 777 ../../source/storage/

#run docker-compose
composer install
php artisan key:generate
docker rm -f huydv-mysql server-nginx huydv-php elasticsearch
docker-compose -f ../docker-compose.yml up

