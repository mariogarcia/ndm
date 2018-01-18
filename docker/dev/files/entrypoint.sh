#!/usr/bin/env bash

# #########################
# ## Node Entrypoint ######
# #########################

tmux -2 new-session -d -s newsdomath
tmux rename-window -t newsdomath:0 'front'
tmux select-window -t newsdomath:0

tmux new-window -t newsdomath
tmux rename-window -t newsdomath:1 'back'
tmux select-window -t newsdomath:1

tmux select-window -t newsdomath:0
tmux -2 attach-session -t newsdomath
