<md-toolbar layout="row">
            
            <h1 class="md-toolbar-tools titelmpd" hide-sm>My perfect destination</h1>
            <div flex class="md-toolbar-tools" layout="row" layout-align="end">
                <a class="menulink" href="#/">Sign up</a>                
                <a class="menulink borderleft" href="#/">Sign in</a>
    
            </div>          
</md-toolbar>
<md-content>
<div layout="column">
    <md-input-container>
          <label>Username</label>
          <input ng-model="user.firstName" placeholder="ex. Jurgb">
    </md-input-container>
     <md-input-container>
          <label>Password</label>
          <input type="password" ng-model="user.password">
        </md-input-container>
        <md-input-container>
        <md-button href="#/app" class="md-raised">Login</md-button>
    </md-input-container>
</div>
</md-content>