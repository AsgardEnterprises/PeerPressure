./setup.sh
(cd frontend && grunt build push_to_backend && cd ..)
gunicorn --chdir ./backend hello
