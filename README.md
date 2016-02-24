# subtree-test

A test how to use travis to do a subtree push to github pages

## Manual method

```
git subtree push --prefix dist/ origin gh-pages
```

## With travis

Add this to `.travis.yml`

```
after_success:
    - git subtree push --prefix dist/ origin gh-pages
```

# license

CC 0
