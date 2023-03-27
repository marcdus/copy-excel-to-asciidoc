# Excel/Word clipboard to AsciiDoc PSV table
Tool to facilitate the creation of tables for asciidoc by simply copy-pasting cells from excel or word.

The script is based on [@jonmagic](https://github.com/jonmagic)'s [implementation for markdown](https://github.com/jonmagic/copy-excel-paste-markdown).

## Usage
To use the tool you can either:
- Use it **online** on [this site](https://marcdus.github.io/copy-excel-to-asciidoc/),
- or [download](https://github.com/marcdus/copy-excel-to-asciidoc/archive/refs/heads/main.zip) the repository, unzip it, and open `index.html` with a browser to **run it locally**. No data will leave your computer using this method.

To create the table:
1. Select and copy cells in excel/word
1. Paste into text box by opening `index.html` with a browser
1. Copy-paste created table in your AsciiDoc document

## Example
An example on how the output should look:
```
|======================================
| Animal | Cuteness | Friendship | Effort
| Cat    | 10       | 10         | 1     
| Dog    | 10       | 1          | 10    
|======================================
```
Demo gif of the original markdown script:
![demo](https://cl.ly/120h1K2Q1Y3H/Screen%20Recording%202016-08-31%20at%2010.31%20PM.gif)

---
## Contributors
- [@marcdus](https://github.com/marcdus)
- [@jonmagic](https://github.com/jonmagic)
