#pragma strict
var rotAng = 15;        // 초당 회전각도
function Start () {

}

function Update () {
    var amtToRot = rotAng * Time.deltaTime;
    transform.RotateAround(Vector3.zero, Vector3.up, amtToRot);
}
