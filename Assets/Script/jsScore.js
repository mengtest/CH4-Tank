#pragma strict

static var hit = 0;             // 명중시킨 횟수
static var lose = 0;            // 피격당한 횟수

function Start () {
    hit = 0;
    lose = 0;
}

function OnGUI () {
    GUI.Label(Rect(10, 10, 120, 20), "명중: " + hit);
    GUI.Label(Rect(10, 30, 120, 20), "피격: " + lose);
}
