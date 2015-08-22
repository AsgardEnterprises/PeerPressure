(cd frontend && ./setup.sh && cd ..)
(cd frontend && grunt build push_to_backend && cd ..)
gunicorn --chdir ./backend/application views
