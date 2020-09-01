// var geometry_bullet = new THREE.BoxBufferGeometry(2,2,40,1,1,1);

var geometry_bullet = new THREE.SphereBufferGeometry(0.20, 0.20);

var list_color = ["red","green", "blue","yellow"];

//var material_bullet = new THREE.MeshBasicMaterial({color: "white"});

function bullet(object_lancant_la_bullet, velocity_origine, duree_de_vie_bullet, bullets_list){
	var i = Math.floor(Math.random() * Math.floor(3));
	var my_bullet = new THREE.Mesh(geometry_bullet,new THREE.MeshBasicMaterial({color: list_color[i]}));
	
	my_bullet.position.copy(object_lancant_la_bullet.position);
	my_bullet.quaternion.copy(object_lancant_la_bullet.quaternion);

	my_bullet.velocity = velocity_origine;

	bullets_list.push(my_bullet);

	my_bullet.update = function(delta){
		my_bullet.translateZ( - velocity_origine * delta);
		duree_de_vie_bullet -= delta;
		if (duree_de_vie_bullet < 0 || my_bullet.position.length() >  20){
			scene.remove(my_bullet);
			bullets_list.splice(bullets_list.indexOf(my_bullet), 1);
			my_bullet = null;
		}
	}
	
	return my_bullet;
}