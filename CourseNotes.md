Hooks are functions which can be used to handle state, fetch data and to interact with browser apis.
Hooks also give us a way writing functions that can ne shared across files and across projects.

Array Destructuring:
const [first, second, third] = ['Alex', 'Ali', 'Amir']
const [, , third] = ['Alex', 'Ali', 'Amir']

1//038UEj8OLhF6lCgYIARAAGAMSNwF-L9IryQDl3iPvHcJG3zkGB77ft7uAa6R4HtnVXA5aLCt-jXlZBss2ayOa_RzStt7sELY0rCY

UseEffect On Every Component Render:
To call the function on each component render, skip adding the dependency list. No list, nothing to compare against, that means run the effect every time.
function MyComponent() {
    // ...
    React.useEffect(() => {
        runThisFunctionOnEveryRender();
    })
    // ...
}

React.useEffect(() => {
  fetch('https://url.com')
    .then(res => res.json())
    .then(res => setData(res))    or .then(setData)
},)
