#!/bin/ash

#start mongo
echo "trying to start mongo"
mongod
status=$?

if [ $status -ne 0]; then
    echo "Failed to start mongo; exit code $status"
    exit $status
fi

#start node
echo "trying to start node"
npm start --prefix server
status=$?

if [ $status -ne 0]; then
    echo "Failed to start node; exit code $status"
    exit $status
fi

#check that processes are still running
SLEEP_TIME=60
while /bin/true; do
  ps aux |grep mongod |grep -q -v grep
  PROCESS_1_STATUS=$?
  ps aux |grep node |grep -q -v grep
  PROCESS_2_STATUS=$?
  # If the greps above find anything, they will exit with 0 status
  # If they are not both 0, then something is wrong
  if [ $PROCESS_1_STATUS -ne 0 -o $PROCESS_2_STATUS -ne 0 ]; then
    echo "One of the processes has already exited."
    exit -1
  fi
  sleep $SLEEP_TIME
done
