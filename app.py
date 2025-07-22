from flask import Flask, render_template
import os


def get_latest_commit():
    output = os.popen('git log -1 --pretty=format:"%h|%s|%cr"').read()
    try:
        commit_hash, description, time = output.strip().split('|')
        return {
            'hash': commit_hash,
            'description': description,
            'time': time
        }
    except ValueError:
        return {
            'hash': '',
            'description': '',
            'time': ''
        }


app = Flask(__name__)


@app.context_processor
def inject_commit():
    return {'commit': get_latest_commit()}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/commit')
def commit():
    return get_latest_commit()


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
