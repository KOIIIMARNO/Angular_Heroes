import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipfil'
})
export class PipfilPipe implements PipeTransform {
  transform(users: any[], value: any) {
    if (value.name) {
      if (value.name.length>1) {
        users = users.filter(user => {
          if (user.name.toLocaleLowerCase().includes(value.name.toLocaleLowerCase())) {
            return user;
      }
    })
  }
  }

    if (value.ability) {
      users = users.filter(user => {
        if (user.ability.join().toLocaleLowerCase().includes(value.ability.join().toLocaleLowerCase())) {
          return user;
        }
      })
    }

    if (value.min) {
      users = users.filter(user => {
        if (user.level >= value.min) {
          return user;
        }
      })
    }

    if (value.max) {
      users = users.filter(user => {
        if (user.level <= value.max) {
          return user;
        }
      })
    }
    if (value.sort) {
      if (value.sort == 1) {
        users = users.sort(function (a, b) {
          return a.level - b.level;
        });
      } else {
        users = users.sort(function (a, b) {
          return b.level - a.level;
        });
      }

    }
    return users;
  }

}