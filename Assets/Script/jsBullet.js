#pragma strict

var snd : AudioClip;	// Sound Clip
var explosion : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter(coll : Collider) {
    if (coll.gameObject.tag == "WALL") {                            // 충돌체의 태그가 WALL인지 식별
        Instantiate(explosion, coll.transform.position, Quaternion.identity);
        AudioSource.PlayClipAtPoint(snd, transform.position);	// Play sound
	    Destroy(coll.gameObject);								// Destroy target object
	    Destroy(gameObject);									// Destroy bullet
    }
}

