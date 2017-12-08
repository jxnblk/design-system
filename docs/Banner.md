# `<Banner />`

Use `<Banner />` component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme. `text` can also be passed in as `children`.

```jsx
<Banner
  bg='green'
  header='Banner'
  iconName='star'
  onClose={() => {}}
  showIcon='false'
  textAlign='right'
>
  This is a banner
</Banner>
```

Prop | Type | Description
---|---|---
bg | string | Sets background-color and color. Accepts `blue`, `green`, `orange`, `red`, `lightBlue`, `lightGreen`, `lightOrange`, `lightRed`
header | string | Sets header content
iconName | string | Sets left-hand svg icon name
onClose | function | passes onClick functionality to close button / shows close button if provided
showIcon | boolean | Renders left-hand icon (true by default)
text | string or node | Sets text content
textAlign | string | Sets text alignment for text only (icons not affected)