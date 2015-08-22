(gunicorn --chdir ./backend hello) &
(cd frontend && grunt)
