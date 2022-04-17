
let div = document.getElementById('modify')

function set()
{
    let elements =
    document.getElementsByName('cssProperty');

    for (let index = 0; index < elements.length; index++)
    {
        let cssProperty = elements[ index ].getAttribute('id');
        let cssValues = elements [ index ].value;
        
        // console.log(cssProperty, cssValues)
        
        div.style [ cssProperty] = cssValues
    }
}
document.getElementById('set').addEventListener('click', set);