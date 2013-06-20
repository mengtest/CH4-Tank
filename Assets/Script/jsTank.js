#pragma strict

var speed = 5;                  // 이동 속도(m/s)
var rotSpeed = 120;             // 회전 속도(각도/s)
var turret : GameObject;        // 포탑

var power = 600;
var bullet 		: Transform;
var explosion 	: Transform;
var snd			: AudioClip;

function Start () {

}

function Update () {
    var amtToMove = speed * Time.deltaTime;         // 프레임에 이동할 거리
    var amtToRot = rotSpeed * Time.deltaTime;       // 프레임에 회전할 각도

    var front = Input.GetAxis("Vertical");          // 전후진
    var ang = Input.GetAxis("Horizontal");          // 좌우 회전 방향
    var ang2 = Input.GetAxis("MyTank");

    transform.Translate(Vector3.forward * front * amtToMove);       // 탱크 전후진
    transform.Rotate(Vector3(0, ang * amtToRot, 0));                // 탱크 회전
    turret.transform.Rotate(Vector3.up * ang2 * amtToRot);          // 포탑 회전

    // 포탄 발사
    if (Input.GetButtonDown("Fire1")) {
        var spPoint = GameObject.Find("spawnPoint");

        Instantiate(explosion, spPoint.transform.position, Quaternion.identity);
        AudioSource.PlayClipAtPoint(snd, spPoint.transform.position);

        var myBullet = Instantiate(bullet, 
                                   spPoint.transform.position,
                                   Quaternion.identity);
        myBullet.rigidbody.AddForce(spPoint.transform.forward * power);
    }
}
