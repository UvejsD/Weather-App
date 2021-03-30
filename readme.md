# how to use git 

Nese jemi duke perdorur nje pc te re , fillimisht duhet
me konfiguru accountin, me ane te komandave:

# git config --global user.name "emri GITHUB"
# git config --global user.email "someone@gmail.com"

Fillimisht krijoni nje repository ne GITHUB

E nisim projektin me ane te komandes :

# git init

I selektojme gjitha files me ane te komandes:

# git add -A

Nese doni me dergu vetem nje file te caktuar ateher perdorni komandem:

# git add fileName.js

Nese deshironi me kontrollu gjendjen e file-ave qe jane editu (changed) :

# git status

Pasi qe jemi gati me modifikim e dergojm gjendjen (fotografin) e projektit dhe mesazhin qka jane modifiku:

# git commit -m "mesazhi jone"

E lidhim projektin tone lokalisht me repository ne GITHUB , me ane te komandes ne GitHub:
/merre nga git hub 

# git remote add origin https://github.com/UvejsD/Weather-App.git

E dergojm projektin :

# git push origin master