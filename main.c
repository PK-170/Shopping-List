#include <stdio.h>

int age[] = {21, 29, 44, 55, 66, 44, 99};
int length = sizeof(age)/sizeof(age[0]);

//two dimenstion array
int dimArray[3][3] = {{5, 4,95}, {3, 8, 89}};

int main(){
    
    for(int i=0; i<=length; i++){
       printf("%d \n", age[i]);
    }
    
    printf("%d", dimArray[0][2]);
    return 0;
}