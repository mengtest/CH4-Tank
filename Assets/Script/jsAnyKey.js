#pragma strict

function Start () {

}

function Update () {
    if (Input.anyKeyDown) {
        Application.LoadLevel("MainGame");
    }
}
