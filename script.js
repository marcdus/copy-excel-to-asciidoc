var editor = document.getElementById("editor")

function columnWidth(rows, columnIndex) {
  return Math.max.apply(null, rows.map(function(row) {
    return ('' + row[columnIndex]).length
  }))
}

function looksLikeTable(data) {
  return true
}

editor.addEventListener("paste", function(event) {
  var clipboard = event.clipboardData
  var data = clipboard.getData('text/plain').trim()

  if(looksLikeTable(data)) {
    event.preventDefault()
  }else{
    return
  }

  var rows = data.split((/[\u0085\u2028\u2029]|\r\n?/g)).map(function(row) {
    row = row.replace('\n', ' ')
    return row.split("\t")
  })

  var colAlignments = []

  var columnWidths = rows[0].map(function(column, columnIndex) {
    var alignment = "l"
    var re = /^(\^[lcr])/i
    var m = column.match(re)
    if (m) {
        var align = m[1][1].toLowerCase()
        if (align === "c") {
          alignment = "c"
        } else if (align === "r") {
          alignment = "r"
        }
      }
    colAlignments.push(alignment)
    column = column.replace(re, "")
    rows[0][columnIndex] = column
    return columnWidth(rows, columnIndex)
  })
  var markdownRows = rows.map(function(row, rowIndex) {
    return "| " + row.map(function(column, index) {
      return column + Array(columnWidths[index] - column.length + 1).join(" ")
    }).join(" | ")
    row.map

  })

  // adding table top and bottom markers
  var markdownRows = rows.map(function(row, rowIndex) {
    return "| " + row.map(function(column, index) {
      return column + Array(columnWidths[index] - column.length + 1).join(" ")
    }).join(" | ")
  })

  var maxLength = markdownRows.reduce(function(max, row) {
    return Math.max(max, row.length)
  }, 0)

  
  var separator = "|" + Array(maxLength - 2).join("=")

  markdownRows.unshift(separator)
  markdownRows.push(separator)

  event.target.value = markdownRows.join("\n")
  return false
})  