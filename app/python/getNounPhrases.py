import argparse
from textblob import TextBlob

parser = argparse.ArgumentParser()
parser.add_argument('--input')
args = parser.parse_args()

if args.input:
    blob = TextBlob(args.input)
    print(blob.noun_phrases)
