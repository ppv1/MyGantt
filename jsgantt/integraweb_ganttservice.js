/**
 * Created with JetBrains WebStorm.
 * User: eric
 * Date: 12-11-30
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
function INSGanttService()
{
    if(!(this instanceof INSGanttService))
    {
        return new INSGanttService();
    }

    var this_IGS=this;

    if(typeof Format==undefined){
        var Format={
           f1 :"",
           f2:""
        }
    }
}