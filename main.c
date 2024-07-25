#include <stdio.h>

int age[] = {21, 29, 44, 55, 66, 44, 99};
int length = sizeof(age)/sizeof(age[0]);


int main(){
    
    for(int i=0; i<=length; i++){
       printf("%d \n", age[i]);
    }

    return 0;
}