if [ "$#" -ne 2 ]; then
  echo "Error: Exactly two parameters required: OLDPORT NEWPORT"
  exit 1
fi

OLDPORT="$1"
NEWPORT="$2"

if ! [[ "$OLDPORT" =~ ^[0-9]+$ ]]; then
  echo "Error: OLDPORT must be a non-negative integer."
  exit 1
fi

if ! [[ "$NEWPORT" =~ ^[0-9]+$ ]]; then
  echo "Error: NEWPORT must be a non-negative integer."
  exit 1
fi


kill -9 $(lsof -ti ":$OLDPORT") 2>/dev/null
git pull
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
gunicorn -b ":$NEWPORT" app:app
