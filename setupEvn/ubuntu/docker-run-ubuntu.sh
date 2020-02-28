# #!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SCRIPT=$(readlink -f $0)
SOURCEPATH=`dirname $SCRIPT`

chmod -R 777 $SOURCEPATH/../../source/storage/

#run docker-compose
docker rm -f huydv-mysql server-nginx huydv-php elasticsearch
docker-compose -f $SOURCEPATH/../docker-compose.yml up
