#pragma strict

var snd : AudioClip;	// Sound Clip
var explosion : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter(coll : Collider) {

    Instantiate(explosion, transform.position, Quaternion.identity);
    AudioSource.PlayClipAtPoint(snd, transform.position);
    Destroy(gameObject);

    if (coll.gameObject.tag == "WALL") {                            // 충돌체의 태그가 WALL인지 식별
        Destroy(coll.gameObject);
    } else if (coll.gameObject.tag == "ENEMY") {
        jsScore.hit++;
        if (jsScore.hit > 5) {
            Destroy(coll.transform.root.gameObject);
            // 승리화면으로 분기
            Application.LoadLevel("WinGame");
        }
    } else if (coll.gameObject.tag == "TANK") {
        jsScore.lose++;
        if (jsScore.lose > 5) {
            // 패배 화면으로 분기
            Application.LoadLevel("LoseGame");
        }
    }
}

