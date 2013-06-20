#pragma strict

private var power = 1200;

var bullet              : Transform;    // 포탄
var target              : Transform;    // LookAt() 목표
var spPoint             : Transform;    // spawnPoint
var explosion           : Transform;    // 포구 앞의 화염
var snd                 : AudioClip;    // 발사음

private var ftime : float = 0.0;        // 사격 제한 시간

function Start () {

}

function Update () {
    transform.LookAt(target);           // 아군 방향으로 회전
    ftime += Time.deltaTime;            // 경과 시간 누적

    var hit : RaycastHit;           // 탐색 결과 저장
    var fwd = transform.TransformDirection(Vector3.forward);

    Debug.DrawRay(spPoint.transform.position, fwd * 20, Color.green);       // 거리 표시
    
    // 탐색 실패
    if (Physics.Raycast(spPoint.transform.position, fwd, hit, 20) == false) {
        Debug.Log("Fail Raycast");
        return;
    }
    
    if (hit.collider.gameObject.tag != "TANK" || ftime < 2) {
        Debug.Log("Not Tank!");
        return;
    }
    Debug.Log(hit.collider.gameObject.name);



    // 포구 앞의 화염
    Instantiate(explosion, spPoint.transform.position, Quaternion.identity);

    // 포탄
    var obj = Instantiate(bullet, spPoint.transform.position, spPoint.transform.rotation);
    obj.rigidbody.AddForce(fwd * power);

    AudioSource.PlayClipAtPoint(snd, spPoint.transform.position);       // 포탄 발사음
    ftime = 0;                                                          // 경과 시간 리셋
}
