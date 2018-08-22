- $.Event(eventType,arguments)转化成事件，并传入参数，只可使用一次;

- $.isNumeric()判断变量是否数值型或数字值字符串，包含十六进制等;
- $.isPlainObject()是否为对象字面量; 

- $.grep([]/{},function(item,index))过滤出返回值为真的数组;
- $.map([]/{},function(item,index))过滤出以返回值为数组元素的数组;
- $.inArray()返回元素在数组中的位置; 

- caret 使用caret样式实现三角


- bootstrapTable DOM结构

- div.bootstrap-table`$container`
    - div.fixed-table-bar`$toolbar`
    - div.fixed-table-container`$tableContainer`
        - div.fixed-table-header`$tableHeader`
            - table.table.table-hover.table-striped
                - thead`$header_`[对$header的克隆，实现表头固定，内容滚动]
        - div.fixed-table-body`$tableBody`
            - div.fixed-table-loading`$tableLoading`
            - table#js-tableList(触发bootstrapTable元素)`$el`
                - thead`$header`
                - tbody
        - div.fixed-table-footer`$tableFooter`
        - div.fixed-table-pagination`$pagination`


