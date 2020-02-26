//所有jQ语法都是在页面完成加载之后完成的
//还有舍入误差问题
//Math.round() 函数返回一个数字四舍五入后最接近的整数。
//pow() 方法可返回 x 的 y 次幂的值,可以用于保留多少位小数的计算中

$(
    function(){
        //get dom elem
        var $width = $('#width'),
            $height = $('#height'),
            $btnCal = $('#calculate'),
            $perimeter = $('#perimeter'),
            $area = $('#area');
        /*calc button click event*/
        $btnCal.click(function(){
            //get value
            var w = Number($width.val()),
                h = Number($height.val());
            
            // calculate
            function perFractional(x,y,n){
                return Math.round((x+y)*2*Math.pow(10,n))/Math.pow(10,n);
            }
            function areaFractional(x,y,n){
                return Math.round(x*y*Math.pow(10,n))/Math.pow(10,n);
            }    
            //output
            $perimeter.val(perFractional(w,h,2));
            $area.val(areaFractional(w,h,2));
        })    
    }
);